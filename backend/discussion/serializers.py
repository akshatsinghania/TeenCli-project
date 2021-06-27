from rest_framework import serializers

class DiscussionSerializer(serializers.Serializer):
	title = serializers.CharField(max_length=100)
	description = serializers.CharField(max_length=350)
