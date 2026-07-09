(function() {
  const installButton = document.getElementById('installButton');
  const statusBadge = document.getElementById('connectionBadge');
  let deferredInstallPrompt = null;

  function canUseServiceWorker() {
    return 'serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1');
  }

  function setStatus() {
    if (!statusBadge) return;
    if (location.protocol === 'file:') {
      statusBadge.textContent = 'Chạy trực tiếp trên máy';
      statusBadge.className = 'status-badge local';
      return;
    }
    if (!navigator.onLine) {
      statusBadge.textContent = 'Đang dùng offline';
      statusBadge.className = 'status-badge offline';
      return;
    }
    statusBadge.textContent = canUseServiceWorker() ? 'Sẵn sàng cài/offline' : 'Đang chạy trên web';
    statusBadge.className = 'status-badge online';
  }

  function showInstallButton() {
    if (!installButton || !deferredInstallPrompt) return;
    installButton.hidden = false;
    installButton.classList.remove('is-hidden');
  }

  async function registerServiceWorker() {
    if (!canUseServiceWorker()) {
      setStatus();
      return;
    }
    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js?v=20260709-studio19');
      registration.update();
      setStatus();
    } catch (error) {
      if (statusBadge) {
        statusBadge.textContent = 'Không bật �ược offline';
        statusBadge.className = 'status-badge offline';
      }
    }
  }

  window.addEventListener('beforeinstallprompt', function(event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallButton();
  });

  if (installButton) {
    installButton.addEventListener('click', async function() {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installButton.hidden = true;
    });
  }

  window.addEventListener('online', setStatus);
  window.addEventListener('offline', setStatus);
  if (canUseServiceWorker()) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (refreshing || sessionStorage.getItem('nlsStudioReloadedForUpdate') === '1') return;
      refreshing = true;
      sessionStorage.setItem('nlsStudioReloadedForUpdate', '1');
      location.reload();
    });
  }
  setStatus();
  registerServiceWorker();
})();

