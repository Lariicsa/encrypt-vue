import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppButton from "@/components/AppButton.vue";

describe("AppButton", () => {
  it("render text and handle clics", () => {
    const wrapper = mount(AppButton, {
      global: {
        stubs: {
          "font-awesome-icon": true,
        },
      },
      slots: {
        default: "Send",
      },
    });
    expect(wrapper.text()).toContain("Send");
  });

  it("emits click event", async () => {
    const wrapper = mount(AppButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
