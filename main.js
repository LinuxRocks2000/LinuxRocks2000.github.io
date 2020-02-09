function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}
if (isTouchDevice()){
    alert("Hi, Mobile User!");
}
