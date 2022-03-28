import React from 'react';
import 'react-native-reanimated';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from './interface/navigation/Root';

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <FractalAppRoot>
                    <Root />
                </FractalAppRoot>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
