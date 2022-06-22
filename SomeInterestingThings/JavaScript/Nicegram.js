const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Content-Type": "application/json"};
const myData = `{"data": {"premiumAccess": true}}`;

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: myData
};
$done(myResponse);
