import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { logUserOut } from "../apollo";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: black;
`;

const Text = styled.Text`
  color: white;
  font-size: 50px;
`;

function Feed({ navigation }) {
  return (
    <Container>
      <Text>Feed</Text>
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text>Photo</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Feed;
