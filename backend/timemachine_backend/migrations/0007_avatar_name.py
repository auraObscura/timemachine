# Generated by Django 4.0.4 on 2022-04-27 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timemachine_backend', '0006_rename_text_line_input_text_line_output_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='avatar',
            name='name',
            field=models.CharField(default='yolo', max_length=50),
            preserve_default=False,
        ),
    ]