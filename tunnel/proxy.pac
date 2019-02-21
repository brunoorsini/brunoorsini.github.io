function FindProxyForURL(url, host) {

	if (shExpMatch(host, "devproxy.prod.apps.bdl") )
		return "DIRECT";

	if (shExpMatch(host, "*.apps.sebp") || shExpMatch(host, "*.apps.bdl"))
		return "SOCKS localhost:8585";
	else
		return "DIRECT";
} 
