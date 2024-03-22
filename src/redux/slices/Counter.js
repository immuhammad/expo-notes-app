import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";
import { Button } from "react-native";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button title="Increment value" onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </Button>
        <Text>{count}</Text>
        <Button title="Decrement value" onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </Button>
      </View>
    </View>
  );
}
