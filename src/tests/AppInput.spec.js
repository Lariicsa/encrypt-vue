import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppInput from "@/components/AppInput.vue";

describe("AppInput", () => {
  it("renderiza con placeholder", () => {

    const wrapper = mount(AppInput, {
      global: {
        stubs: {
          "font-awesome-icon": true,
        },
      },
      props: { placeholder: "Ingresa tu nombre" },
    });

    expect(wrapper.find("input").attributes("placeholder")).toBe("Ingresa tu nombre");
  });

  it("emite evento update:modelValue", async () => {
    const wrapper = mount(AppInput, {
      props: { modelValue: "", "onUpdate:modelValue": vi.fn() },
    });

    const input = wrapper.find("input");
    await input.setValue("Hola");

    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["Hola"]);
  });
});
