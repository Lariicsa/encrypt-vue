import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useToaster, toaster } from '@/composables/useToaster' // Ajusta la ruta si es necesario

vi.useFakeTimers()

describe('useToaster', () => {
  let show, hide

  beforeEach(() => {
    toaster.value = {
      visible: false,
      message: '',
      type: 'info',
    }

    const toasterAPI = useToaster()
    show = toasterAPI.show
    hide = toasterAPI.hide
  })

  it('muestra el toast con mensaje y tipo por defecto', () => {
    show('Hola mundo')

    expect(toaster.value.visible).toBe(true)
    expect(toaster.value.message).toBe('Hola mundo')
    expect(toaster.value.type).toBe('info')

    vi.advanceTimersByTime(2999)
    expect(toaster.value.visible).toBe(true)

    vi.advanceTimersByTime(1)
    expect(toaster.value.visible).toBe(false)
  })

  it('muestra el toast con un tipo específico y duración personalizada', () => {
    show('Error fatal', 'error', 5000)

    expect(toaster.value.visible).toBe(true)
    expect(toaster.value.type).toBe('error')
    expect(toaster.value.message).toBe('Error fatal')

    vi.advanceTimersByTime(5000)
    expect(toaster.value.visible).toBe(false)
  })

  it('oculta el toast inmediatamente con hide()', () => {
    show('Mensaje temporal', 'success', 5000)
    expect(toaster.value.visible).toBe(true)

    hide()
    expect(toaster.value.visible).toBe(false)
  })

  it('resetea el temporizador si se llama show varias veces seguidas', () => {
    show('Primer mensaje', 'info', 3000)
    vi.advanceTimersByTime(1000)

    show('Segundo mensaje', 'warning', 3000)
    expect(toaster.value.message).toBe('Segundo mensaje')

    vi.advanceTimersByTime(2999)
    expect(toaster.value.visible).toBe(true)

    vi.advanceTimersByTime(1)
    expect(toaster.value.visible).toBe(false)
  })
})
