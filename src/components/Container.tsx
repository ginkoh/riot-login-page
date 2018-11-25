// React.
import * as React from 'react'
import { SFC } from 'react';

// Emotion.
import styled from 'react-emotion';

// Interfaces.
interface DynamicContainerProps {
    width: number,
    textColor?: string,
    background?: string,
    className?: string,
    children?: any
};

// Styled Components.
const DynamicContainer = styled('div') <DynamicContainerProps>`
    background: ${({ background }) => background};
    color: ${({ textColor }) => textColor};
    width: ${({ width }) => width}%;
    ${({ background }) => background && 'background-size: cover'};
    height: 100%;
    display: flex;
    flex-direction: row;
`;

// Components.
const Container: SFC<DynamicContainerProps> = ({
    width,
    textColor,
    background,
    className,
    children,
}) => (
        <DynamicContainer
            width={width}
            background={background}
            textColor={textColor}
            className={className}
        >
            {children}
        </DynamicContainer>
    );

export default Container;