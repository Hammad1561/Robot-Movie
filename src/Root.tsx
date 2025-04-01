import { Composition } from 'remotion';
import { MyComposition } from './MyComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyComposition}
        durationInFrames={450} // 30s at 15fps
        fps={15}
        width={1920}
        height={1080}
      />
    </>
  );
};
