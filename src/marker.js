/* global google */

let React = require('react')
let blacklist = require('blacklist')

module.exports = React.createClass({
  componentWillUnmount () {
    if (!this.marker) return

    this.marker.setMap(null)
  },

  getMarker () {
    return this.marker
  },

  render () {
    let options = this.props
    if (!options.map) return null

    // avoid superfluous map reset
    if (options.map === this.map) {
      options = blacklist(options, 'map')

    } else {
      this.map = options.map
    }

    // new
    if (!this.marker) {
      this.marker = new google.maps.Marker(options)

    // existing
    } else {
      this.marker.setOptions(options)
    }

    return null
  }
})

module.exports.Animation = google.maps.Animation