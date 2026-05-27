from datetime import datetime


def validar_datas(checkin, checkout):
    data_checkin = datetime.strptime(checkin, "%Y-%m-%d")
    data_checkout = datetime.strptime(checkout, "%Y-%m-%d")

    return data_checkout > data_checkin


def validar_email(email):
    return "@" in email and "." in email


def calcular_diarias(checkin, checkout):
    data_checkin = datetime.strptime(checkin, "%Y-%m-%d")
    data_checkout = datetime.strptime(checkout, "%Y-%m-%d")

    diferenca = data_checkout - data_checkin

    return diferenca.days


def calcular_total(diarias, valor_quarto):
    return diarias * valor_quarto


def cancelar_reserva(codigo_digitado, codigo_salvo):
    return codigo_digitado == codigo_salvo