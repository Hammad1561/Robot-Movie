import { AbsoluteFill, Sequence } from 'remotion';

export const MyComposition = () => {
  return (
    <>
      {/* Scene 1: Title Screen (0-10s) */}
      <Sequence from={0} durationInFrames={150}>
        <AbsoluteFill style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: 60 }}>The Future of AI</h1>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 2: AI Robot (10-20s) */}
      <Sequence from={150} durationInFrames={150}>
        <AbsoluteFill style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: 50 }}>AI is changing the world</h1>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 3: Closing Scene (20-30s) */}
      <Sequence from={300} durationInFrames={150}>
        <AbsoluteFill style={{ backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: 40 }}>Made by Hammad</h1>
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
