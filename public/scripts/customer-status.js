// /* eslint-disable camelcase */
// /* eslint-disable no-undef */
// // put status.ejs here, in jquery

// const getStatus = (userId) => {
//   $.get(`/api/status/${userId}`, function (data) {
//     const orders = data.orders;
//     console.log(orders);

//     for (const order of orders) {
//       console.log(order.category_id);
//     }

//     renderStatusPage(orders);
//   }).fail(function (xhr, status, error) {
//     // redirect to /error -> error.ejs
//     console.log(error);
//   });
// };

// const renderStatusPage = (orders) => {
//   const $statusContainer = $("<div>").addClass("status-container");
//   const $orderNumber = $("<h2>")
//     .addClass("order-number")
//     .text(`Hi ${uer}, Your order number is ${cart_id}`);

//   const $statusTable = $("<table>").addClass("status-table");
//   const $thead = $("<thead>");
//   const $tbody = $("<tbody>");

//   const $headerRow = $("<tr>").addClass("status-table-name");
//   $headerRow.append("<th>Order ID</th>");
//   $headerRow.append("<th>Order Status</th>");
//   $headerRow.append("<th>Estimated Time</th>");
//   orders.forEach((order) => {


//     const $contentRow = $("<tr>").addClass("status-table-content");
//     $contentRow.append("<td>1</td>");
//     $contentRow.append("<td>100</td>");
//     $contentRow.append("<td>2023-07-04 15:30:00</td>");
//   });
//   $thead.append($headerRow);
//   $tbody.append($contentRow);

//   $statusTable.append($thead);
//   $statusTable.append($tbody);

//   $statusContainer.append($orderNumber);
//   $statusContainer.append($statusTable);
// };




