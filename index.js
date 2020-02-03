/**
 * Formats a log for better readability.
 * 
 * @param {string} tag - Tag to organize the log.
 * @param {string} text - Text to be logged.
 */
function formatLog(tag, text) {
    return `[${new Date().toLocaleString()}] ${tag}: ${text}`
}

/**
 * Makes a logger that formats a log and writes to a given channel.
 * 
 * @param {(message:string, ...params) => void} channel - Channel where to forward the log.
 * @param {string} tag - Tag to organize the log.
 */
function makeLogger(channel, tag) {
    return function (text, ...params) {
        channel(formatLog(tag, text), ...params)
    }
}

module.exports = {
    makeLogger
}