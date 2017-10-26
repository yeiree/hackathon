import React from 'react';
import {tenants} from '../../data'
import * as BackgroundGeolocation from 'react-native-background-geolocation'

/**
 * 위치 정보 가져오기
 */
const RADIUS = 150;

export class GeoController extends React.Component {

    componentWillMount() {
        // 1.  Wire up event-listeners

        // This handler fires whenever bgGeo receives a location update.
        BackgroundGeolocation.on('location', this.onLocation);

        // This handler fires whenever bgGeo receives an error
        BackgroundGeolocation.on('error', this.onError);

        // This handler fires when movement states changes (stationary->moving; moving->stationary)
        BackgroundGeolocation.on('motionchange', this.onMotionChange);

        // This event fires when a change in motion activity is detected
        BackgroundGeolocation.on('activitychange', this.onActivityChange);

        // This event fires when the user toggles location-services
        BackgroundGeolocation.on('providerchange', this.onProviderChange);

        //add geofence
        BackgroundGeolocation.on('geofence', this.onGeofence);

        tenants.forEach((tenant) => {
            BackgroundGeolocation.addGeofence(convertToGeofence(tenant),
                function () {
                    //success
                },
                function () {
                    //fail
                }
            );
        });

        // 2.  #configure the plugin (just once for life-time of app)
        BackgroundGeolocation.configure({
            // Geolocation Config
            desiredAccuracy: 0,
            distanceFilter: 10,
            // Activity Recognition
            stopTimeout: 1,
            // Application config
            debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
            logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
            stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
            startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
            // HTTP / SQLite config
            url: 'http://yourserver.com/locations',
            batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
            autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
            headers: {              // <-- Optional HTTP headers
                "X-FOO": "bar"
            },
            params: {               // <-- Optional HTTP params
                "auth_token": "maybe_your_server_authenticates_via_token_YES?"
            }
        }, (state) => {
          //  console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);

            if (!state.enabled) {
                // 3. Start tracking!
                BackgroundGeolocation.start(function() {
                //    console.log("- Start success");
                });

                BackgroundGeolocation.startGeofences(function(state) {

                });
            }
        });
    }

    // You must remove listeners when your component unmounts
    componentWillUnmount() {
        // Remove BackgroundGeolocation listeners
        BackgroundGeolocation.un('location', this.onLocation);
        BackgroundGeolocation.un('error', this.onError);
        BackgroundGeolocation.un('motionchange', this.onMotionChange);
        BackgroundGeolocation.un('activitychange', this.onActivityChange);
        BackgroundGeolocation.un('providerchange', this.onProviderChange);
        BackgroundGeolocation.un('geofence', this.onGeofence);

    }

    onLocation(location) {
        //console.log('- [js]location: ', JSON.stringify(location));
    }
    onError(error) {
        var type = error.type;
        var code = error.code;
        //alert(type + " Error: " + code);
    }
    onActivityChange(activityName) {
        //console.log('- Current motion activity: ', activityName);  // eg: 'on_foot', 'still', 'in_vehicle'
    }
    onProviderChange(provider) {
        //console.log('- Location provider changed: ', provider.enabled);
    }
    onMotionChange(location) {
        //console.log('- [js]motionchanged: ', JSON.stringify(location));
    }

    /**
     * 가맹점 정보를 지리 정보로 바꾸기
     * @param tenant
     * @returns {{radius: number, center: {latitude, longitude}, identifier: *}}
     */
    convertToGeofence(tenant) {
        return {
            identifier: tenant.type,
            radius: RADIUS,
            latitude: tenant.lat,
            longitude: tenant.lng,
            notifyOnEntry: true,
            notifyOnExit: false,
            notifyOnDwell: true,
            loiteringDelay: 30000,  // 30 seconds
            extras: {               // Optional arbitrary meta-data
                name: tenant.type
            }
        };
    }

    /**
     * 렌더링은 안함
     * @returns {null}
     */
    render() {
        return <View />;
    }


}
