import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("returns current initial value", () => {
    const { result } = renderHook(
      () => useInputValue("Testing"));
    
    expect(result.current.value).toEqual("Testing");
  });

  it("changes the value and uppercases it", () => {
    const { result } = renderHook(
      () => useInputValue("Testing 123"));
    
    act(() => result.current.onChange({target: {value: "Updated"}}));
    expect(result.current.value).toEqual("Updated");
  });

  it("updates the value", () => {
    const { 
      result, 
      rerender 
    } = renderHook(({ text }) => useInputValue(text), {
      initialValue: { text: "Test String" },
    });

    rerender({text: "New updated"});
    expect(result.current.value).toEqual("New updated");
  });
});