curl "http://localhost:4741/runs" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "run": {
      "time": "'"${TIME}"'",
      "date": "'"${DATE}"'",
      "goal": "'"${GOAL}"'",
      "gameId": "'"${GAMEID}"'"
    }
  }'
