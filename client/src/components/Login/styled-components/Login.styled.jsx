import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    padding-left: 100px;
    padding-right: 100px;
    width: 350px;
`;

export const SingUpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    border-top: 1px solid #b3b3b3;

    span {
        color: #154cff;
        cursor: pointer;
        user-select: none;
        transition: 0.1s;

        :hover {
            color: #002499;
        }
    }
`;