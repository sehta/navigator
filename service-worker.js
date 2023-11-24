// service-worker.js

self.addEventListener('push', function(event) {
  console.log("EVENT",event);
  const options = {
    body: event.data.text(),
    icon: 'path/to/icon.png', // Replace with your icon path
    data: {
      // You can include custom data for the notification
      // Example: id, link, etc.
    }
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
