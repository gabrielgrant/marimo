import { DateTimePickerPlugin } from "../DateTimePickerPlugin";
import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";

describe("DateTimePickerPlugin", () => {
  it("should render when initial value is not provided", () => {
    const plugin = new DateTimePickerPlugin();
    // Create a host element as required by IPluginProps
    const host = document.createElement("div");
    const props = {
      host,
      value: "", // Empty string instead of undefined since type T = string
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

    // For debugging, log the rendered HTML
    console.log("Rendered HTML:", container.innerHTML);

    // Check if the component renders at all
    expect(container.innerHTML).not.toBe("");
    // Check for the date picker group
    const datePicker = container.querySelector('[class*="group"]');
    expect(datePicker).not.toBeNull();
  });
});
