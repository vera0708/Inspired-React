import { ThreeCircles } from 'react-loader-spinner';

const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0',
};

export const PreLoader = () => (
    <div style={style}>
        <ThreeCircles
            height={120}
            width={120}
            color="#8a8a8a"
        />
    </div>
)