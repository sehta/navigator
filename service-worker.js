// service-worker.js

self.addEventListener('push', function(event) {
  console.log('Received a push event', event);

  const pushData = event.data ? event.data.text() : 'No payload';

  const options = {
    body: pushData,
    icon: 'path/to/icon.png',
    data: {
      // You can include custom data for the notification
      // Example: id, link, etc.
    }
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
      .then(() => {
        console.log('Notification displayed successfully');
      })
      .catch((error) => {
        console.error('Notification display error:', error);
      })
  );
});

