import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

const LoadingSkeleton = (props) => (
    <SkeletonTheme color="#141414" highlightColor="#2E2E2E">
        {props.children}
    </SkeletonTheme>
)

export default LoadingSkeleton;