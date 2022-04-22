// Validate Slug function:

function isSlug(val) {
    var reg = /^[a-z0-9-_]+$/;
    return reg.test(val);
}

// Test

if (isSlug('hoc-lap-trinh-tai-freetuts-net')) {
    console.log('Đúng định dạng slug');
} else {
    console.log('Sai định dạng slug');
}
