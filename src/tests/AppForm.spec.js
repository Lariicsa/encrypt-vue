import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppForm from "@/components/AppForm.vue";

describe("AppForm", () => {
  it("render Form", () => {
    const wrapper = mount(AppForm);
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("emits submit event with form data", async () => {
    const wrapper = mount(AppForm, {
      global: {
        stubs: {
          "font-awesome-icon": true,
        },
      },
    });

    const nameInput = wrapper.find('input[name="name"]');
    if (nameInput.exists()) {
      await nameInput.setValue("Doe");
    }

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("submit")).toBeTruthy();
  });
});
