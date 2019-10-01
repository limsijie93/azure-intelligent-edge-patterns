#! /bin/bash
cat ./stream-analytics.deploy.paramters.template.json | jq --arg JOB_NAME "$1" --arg EVENT_HUB_NAMESPACE "$2" --arg EVENT_HUB_NAME "$3" --arg EVENTHUB_KEY_NAME "$4" --arg EVENTHUB_KEY_VALUE "$5" --arg USER_DISPLAY_NAME "$6" --arg USER_PRINCIPAL_NAME "$7" '.parameters.streamanalytics_job_name.value=$JOB_NAME|.parameters.eventhub_namespace.value=$EVENT_HUB_NAMESPACE| .parameters.eventhub_name.value=$EVENT_HUB_NAME| .parameters.eventhub_key_name.value=$EVENTHUB_KEY_NAME| .parameters.eventhub_key_value.value=$EVENTHUB_KEY_VALUE| .parameters.user_display_name.value=$USER_DISPLAY_NAME| .parameters.user_principal_name.value=$USER_PRINCIPAL_NAME' > stream-analytics.deploy.parameters.json