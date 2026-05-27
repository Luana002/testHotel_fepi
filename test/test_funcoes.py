from utils.funcoes import (
    validar_datas,
    validar_email,
    calcular_diarias,
    calcular_total,
    cancelar_reserva
)

# Teste para validar datas

def test_datas_validas():
    assert validar_datas(
        "2026-06-10",
        "2026-06-15"
    ) == True

# Teste para validar datas inválidas

def test_datas_invalidas():
    assert validar_datas(
        "2026-06-15",
        "2026-06-10"
    ) == False

# Teste para validar email válido

def test_email_valido():
    assert validar_email(
        "cliente@gmail.com"
    ) == True

# Teste para validar email inválido

def test_email_invalido():
    assert validar_email(
        "clientegmail.com"
    ) == False

# Teste para calcular diárias

def test_calcular_diarias():
    assert calcular_diarias(
        "2026-06-10",
        "2026-06-15"
    ) == 5

# Teste para calcular total da reserva

def test_calcular_total():
    assert calcular_total(
        5,
        180
    ) == 900

# Teste para cancelamento com código correto

def test_cancelamento_codigo_correto():
    assert cancelar_reserva(
        "HTL-12345",
        "HTL-12345"
    ) == True

# Teste para cancelamento com código incorreto

def test_cancelamento_codigo_incorreto():
    assert cancelar_reserva(
        "HTL-99999",
        "HTL-12345"
    ) == False