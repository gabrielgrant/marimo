import { DateTimePickerPlugin } from "../DateTimePickerPlugin";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { IPluginProps } from "../../types";

describe("DateTimePickerPlugin", () => {
  it("should render when initial value is not provided", () => {
    const plugin = new DateTimePickerPlugin();
    // Create a host element as required by IPluginProps
    const host = document.createElement("div");
    const props: IPluginProps<string, {
      label: string | null;
      start: string;
      stop: string;
      step?: string;
      fullWidth: boolean;
    }> = {
      host,
      value: "",  // Empty string instead of undefined since type T = string
      setValue: () => {},
      data: {
        label: null,
        start: "2024-01-01T00:00:00",
        stop: "2024-12-31T23:59:59",
        fullWidth: false,
      },
      functions: {},
    };
    const { container } = render(plugin.render(props));
    expect(container.querySelector("marimo-datetime")).toBeTruthy();
  });
});
