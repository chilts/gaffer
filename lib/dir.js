module.exports = function(line, done) {
    console.log('- ' + line);
    process.nextTick(done);
};
