import tkinter as tk

window = tk.Tk()

button = tk.Button(text='Switch light on', bg="white", fg="black")
button.pack(pady=20, padx=20)

# schijf hier tussen je code

button.configure(command=lambda: switchBG())


def switchBG():
    isOn = window['bg'] == 'yellow'

    button.configure(text='Switch light ' + ('off' if isOn else 'on'))
    window.configure(bg='black' if isOn else 'yellow')
    print('light is ' + ('off' if isOn else 'on'))


# schijf hier tussen je code

window.mainloop()
