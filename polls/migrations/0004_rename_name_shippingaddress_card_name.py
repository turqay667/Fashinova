# Generated by Django 3.2.9 on 2021-12-08 09:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_auto_20211208_0016'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='name',
            new_name='card_name',
        ),
    ]
