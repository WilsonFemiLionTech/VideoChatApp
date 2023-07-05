const APP_ID ="65ca955fe4304ff48382163b1aa10a17"
const CHANNEL = "main"
const TOKEN =  "007eJxTYFC3rV5tMf/YOmuWmX9Uknt3dFbVsi7b8mzlEk9e4bW7H8xXYDAzTU60NDVNSzUxNjBJSzOxMLYwMjQzTjJMTDQ0SDQ0Z3uzJKUhkJHhxKw7DIxQCOKzMOQmZuYxMAAATxIf9w=="
let UID;
const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}
let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
            <div class="username-wrapper"><span class="user-name">My Name</span></div>
            <div class="video-player" id="user-${UID}"></div>
        </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)



    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()