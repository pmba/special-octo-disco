class Hello {
    static testar() {
        console.log("Testando...")
        setTimeout(() => {
            console.log("Rodou!")
        }, 0)
    }
}

Hello.testar()