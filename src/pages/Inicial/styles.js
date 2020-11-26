
import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 60%;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableHighlight`
    width: 300px;
    height: 60px;    
    background-color: ${props => props.color};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-top: 30px
`;