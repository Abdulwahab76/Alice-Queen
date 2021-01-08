import useWebAnimations, { flash } from "@wellyshen/use-web-animations";
import "./App.css";
import Queen from "./Queen1";

function App() {
    //     const { ref, playState, getAnimation } = useWebAnimations({
    //         ...flash,
    //         timing: {
    //             duration: 2000,
    //             iterations: Infinity,
    //         },
    //     });

    //     const play = () => {
    //         getAnimation().play();
    //     };

    //     const pause = () => {
    //         getAnimation().pause();
    //     };

    //     const reverse = () => {
    //         getAnimation().reverse();
    //     };

    //     const cancel = () => {
    //         getAnimation().cancel();
    //     };

    //     const finish = () => {
    //         getAnimation().finish();
    //     };
    //     return (
    //         <div>
    //             <div className="target" ref={ref}></div>
    //             Cureent animation: {playState} <br />
    //             <button onClick={play}>play </button>
    //             <button onClick={pause}>pause </button>
    //         </div>
    //     );
    // }
    return (
        <>
            <Queen />
        </>
    );
}

export default App;
