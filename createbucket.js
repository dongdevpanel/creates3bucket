var AWS = require('aws-sdk');

var s3 = new AWS.S3();

var params = {
    Bucket: "dongnt-devpanel-bucket-2", 
    CreateBucketConfiguration: {
        LocationConstraint: "ap-southeast-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
 });
