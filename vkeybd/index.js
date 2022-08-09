(function() {
    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      // is not mobile platform.
      document.getElementById('vkeybd').remove()
      return
    }
  
    const KEYCODE = {
      'Back': 8, 'Tab': 9,
      'Del': 46, a: 65,
      c: 67, e: 69, i: 73,
      l: 76, p: 80, s: 83,
      t: 84, v: 86, w: 87,
      '-': 189, '.': 190,
      '`': 192, '[': 219
    }
  
    const button = document.getElementById('vkeybd-button')
    const container = document.getElementById('vkeybd-container')
  
    button.onclick = () => {
      if (container.style.display === '') {
        container.style.display = 'none'
      }
      else {
        container.style.display = ''
      }
    }
  
    for (const [key, value] of Object.entries(KEYCODE)) {
      const btn = document.createElement('div')
      btn.onclick = () => {
        document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: value, key }))
      }
      btn.classList.add('vkeybd-key')
      btn.innerText = key
      container.appendChild(btn)
    }
  })()
  