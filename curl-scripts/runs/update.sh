curl "http://localhost:4741/runs/${ID}" \
  --include \
  --request PATCH \
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
