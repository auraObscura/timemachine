# Generated by Django 4.0.4 on 2022-05-02 04:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('timemachine_backend', '0011_avatar_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='line',
            name='conversation',
            field=models.ForeignKey(default=[], on_delete=django.db.models.deletion.CASCADE, related_name='lines', to='timemachine_backend.conversation'),
        ),
    ]
