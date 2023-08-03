function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == 'ipfixo.in') {
                        ip_sistema.src = 'http://192.168.15.100/mmrest/autocliente'
                    }
				});
}

document.onload = carregar()