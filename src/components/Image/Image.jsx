import React, { useState, forwardRef } from 'react';

import noImage from '~/assets/images/no-image.png';

const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(noImage);
    };

    return <img ref={ref} src={fallback || src} {...props} onError={handleError} />;
});

export default Image;
