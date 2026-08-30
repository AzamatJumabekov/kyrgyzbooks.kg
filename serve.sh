#!/bin/sh
# Spin up a local static server for the site and open it in the browser.
# Usage: ./serve.sh [port]   (default port: 8000)

PORT="${1:-8000}"
DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$DIR" || exit 1

URL="http://localhost:$PORT/ky/index.html"
LAN_IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)"

echo "Serving $DIR"
echo "  Local:   $URL"
[ -n "$LAN_IP" ] && echo "  Network: http://$LAN_IP:$PORT/ky/index.html"

( sleep 1 && command -v open >/dev/null 2>&1 && open "$URL" ) &

python3 -m http.server "$PORT" --bind 0.0.0.0
