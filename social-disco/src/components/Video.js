import React from 'react';
import '../App.css';
import Webcam from "react-webcam";

function Video() {
    return (
        <div style={{
            padding: "1em",
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <h1 style={{
                color: '#E36A4F',
                textAlign: "left"
            }}>Make a recording</h1>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <WebcamStreamCapture />
            </div>
        </div>
    );
};

const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        setRecordedChunks([]);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            // const blob = new Blob(recordedChunks, {
            //     type: "video/webm"
            // });
            // Saving video file
            // const url = URL.createObjectURL(blob);
            // const a = document.createElement("a");
            // document.body.appendChild(a);
            // a.style = "display: none";
            // a.href = url;
            // a.download = "react-webcam-stream-capture.webm";
            // a.click();
            // window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);

    return (
        <>
            <Webcam audio={true} ref={webcamRef}
                videoConstraints = {{
                    facingMode: "user"
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1em",
                    background: "#E4C181"
                }} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                {
                    recordedChunks.length <= 0 ?
                        (capturing ? (
                            <button style={{
                                borderRadius: "100px",
                                border: "0px",
                                color: "#fff",
                                background: "#E36A4F",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                fontSize: "1em",
                                fontWeight: "bold",
                                width: "9em",
                                height: "3em",
                                padding: "10px 15px",
                            }}
                                onClick={handleStopCaptureClick}><i className="material-icons">stop</i>Stop</button>
                        ) : (
                                <button style={{
                                    borderRadius: "100px",
                                    border: "0px",
                                    color: "#fff",
                                    background: "#E36A4F",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    fontSize: "1em",
                                    fontWeight: "bold",
                                    width: "9em",
                                    height: "3em",
                                    padding: "10px 15px",
                                }}
                                    onClick={handleStartCaptureClick}><i className="material-icons">camera_alt</i>Record</button>
                            )) :
                        (
                            <>
                                <button style={{
                                    borderRadius: "100px",
                                    border: "0px",
                                    color: "#fff",
                                    background: "#E36A4F",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    fontSize: "1em",
                                    fontWeight: "bold",
                                    width: "9em",
                                    height: "3em",
                                    padding: "10px 15px",
                                }}
                                    onClick={handleStartCaptureClick}><i className="material-icons">refresh</i>Retry</button>
                                <button style={{
                                    borderRadius: "100px",
                                    border: "0px",
                                    color: "#fff",
                                    background: "#E36A4F",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    fontSize: "1em",
                                    fontWeight: "bold",
                                    width: "9em",
                                    height: "3em",
                                    padding: "10px 15px",
                                }}
                                    onClick={handleDownload}>Next</button>
                            </>
                        )
                }
            </div>
        </>
    );
};

export default Video;