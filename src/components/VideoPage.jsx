import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import config from '../container';


function VideoPage() {
    const id = useParams();
    const roomID = id.id;
    let myMeeting = async (element) => {

        const appID = parseInt(config.app_id);
        console.log(appID)
        const serverSecret = config.serverSecret;
        console.log(serverSecret)
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Test");


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        })
    }

    return (
        <div 
        className='w-full  h-screen'
        ref={myMeeting}>
        </div>
    )
}

export default VideoPage