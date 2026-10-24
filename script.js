// --- 1. DATA MODEL & INITIALIZATION ---
const TEMPLES_DATA = [
    {
        id: 'vadapalli',
        name: 'Vadapalli Sri Venkateswara Swamy Temple',
        deity: 'Lord Venkateswara Swamy (Seven Hills Lord)',
        location: 'Vadapalli, East Godavari District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cOHnBMMzqbqtuvTNPe5Rb4wVFDA2rK4tk4EZ51VHvA&s=10',
        mapUrl: 'https://maps.google.com/?q=Vadapalli+Venkateswara+Swamy+Temple',
        description: 'Famous as "Akhanda Swamy Kshetram", known for performing 7 Saturdays pradakshinas for fulfilling divine wishes.'
    },
    {
        id: 'tirupati',
        name: 'Tirumala Tirupati Devasthanam',
        deity: 'Lord Sri Venkateswara Swamy',
        location: 'Tirumala, Tirupati District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGQ6qbUxTaEQjVsmCTS9JENZUn8R-XCxeP3WPOdntGQ&s=10',
        mapUrl: 'https://maps.google.com/?q=Tirumala+Tirupati+Devasthanams',
        description: 'The world-renowned sacred shrine of Kaliyuga Vaikuntasa, situated atop Seven Hills in Tirumala.'
    },
    {
        id: 'annavaram',
        name: 'Annavaram Satyanarayana Swamy Temple',
        deity: 'Sri Veera Venkata Satyanarayana Swamy',
        location: 'Annavaram, Kakinada District, AP',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXGRUaFhYVFRgZHBgbFhUYGRoaGB4YHSggHholHRgYITEhJSkrLi4vGSAzODMsNyotLi0BCgoKDg0OGxAQGy0iICUvLy0tLjAwLi0tLS0tLS4wLS0tLS0tMC0tLS0vLS0tLS8vLS0vLi0vLTUtMC0vLS0vL//AABEIAN8A4gMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABFEAACAQIEBAMDCQUFCAMBAAABAgMAEQQSITEFBiJBE1FhMnGBBxQjQlKRobHBYnKC0fBDU3OishYzY5KTo9LxJGTCFf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA5EQACAQIDBQYFBAICAQUAAAAAAQIDEQQhMRJBUWHwE3GBkaGxBSLB0eEUIzLxQlIzYhUkQ3KS0v/aAAwDAQACEQMRAD8A7jQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQGGbEontMB8f0qKdanD+TSOowlLREfPzDCu2ZvcP5kVWl8RorS765kqw82aEvNyjaJj72A/Q1E/icd0WdrCviYP9tl7wt8HH8qL4nH/AFPf0j4maLnbDn2lkX4Aj8Df8Kkj8RpPVNHLws91iUwfH8NLoky38mOU/c1jViGJpT0kRSozjqiSqcjFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKA158Wq+p8h+tVK+Mp0stWSRpuRBcc5jigXNPMkS9gTqf3QOpj6AVmzxNes7R9PuWadFblc51xb5TIrkYeF5P2nOQe8DVj8bV5HBSecnYvQw0nqVzE8442TYxx32yJc/5yanWFpLXMtwwaPKz8QcAl5jmvlypbNb7Nl1+FeONCOtuvE7VClpl5/kl+acPiIRCYzOPo1EhazDPoLm17Ek7bbWqthp06jaklyOaNKE76EDLxTGRnK5N/syx5T91gatdhRkrr0Z08LF5x9GZ8PzQQfpYvih/Rv51HLB/6vzIJYZrQuXLXNwNhDPr/AHbf+LfmKjUq+H0080U6lBP+SL/wzmRH0kGRvP6p/Uf1rV6h8QhLKeT9PwUqmHazjmToN9q0U7lY+0AoBQCgFAKAUAoBQCgFAKAUAoBQCgPhNq8lJRV2CM4jxJUVmZgiKCWdiAAB3JOwrJr4yVR7NPT1ZYhT4nIea/lRYkxYEWGxncan/DU7e9vu71zSwiWc/Iv0sPfORz9y8rmSV2dzuzksT8T2q3klZGjTpJaFj4NytJJct9GqlQysCJCCRcohFzYG9zYfjVWtiow0z9vMklUhDTP28WXDBcPgwzAxr1qSVYgPJZr3DH2ANgLaix86oTq1KmunkvuQOU6iz08l4bzYhlk2UEAH2WcXGhGg6SunkO9QSjD/ACd+5f3c62OPt/ZsYoS6dQbY6sSLjW/0jW3ta3lXC7N6367iOlZ33a7vx+DTnKuHEisQwAZjZwQuY+1YFQLk3Um1SpSTvBq+vDhu3+KJNmUWmvt6aEHxPlRZCDCVQsTcFj4SjL9Vj1A5hbK2uvpVqljXF2qL79W3o7VfdLP3+3kU3F8MZbFlKm11uLX9Qe49R99aUZp6Hs4p6EtwTnObDkLLeaP19tfcT7XuP31DUwkZ5xyfoU6lHgdd5V5iSVA8MgePuvdT5Ebq3pVenXq4aWy9OH2M+rST11LlBOHFxWzSqxqx2olKUXF2ZkqU5FAKAUAoBQCgFAKAUAoBQCgFAfCa8bSV2CE49xiKCJ5pnCRILknv5ADuxOgFY1etKvLZjp1mWacLd5+f+c+cZsfJbVIAeiIH7mkt7T/gO3cm1SoxpLmaNCjvZCQQ122X4RL1yzy/lAlmT2kDw2cdFmHW4Gt7lCq63vtWbicTnsQ7nlryXrd7hUqf4x8cteS+pZMRirgkuQpuTdhmcDuSdAq6E36R6nUU4x2XZK8vRfn1focxppfM/wAddZFYxfMEr9GFizrexcZvDJ20JsXtcjMxsfs2q5DDRXzVXn6+W7rM8lWgtWlzev4MEPB8bPYPiAo+z4hCjbTLCpA9odu9SdpRhpH0++e44/VYZPOW0+Svw+6JDjHLLdD4eUJaNFazSoWZF6mvltc2udajp19VUV8+T8DiGLw9vmvv3PmRcWL4hAwJUyjzDAvYXHtJqf4w3uqSVGhUXD267rEjxFJZRmu78MsnCeKRzDPG2VwbEWy2N/YdTcKxP8LG/mbUqsJU/lnmus0969USLZqLLrrzPfE8Es8ZDKzMilUTOV8JiBZgDuhtGuU3tcnW9z5Co6Mrp/K99tc9O/N955FuD4eGpz3jXC3hkaOQDMLeyQQQRcEEbgitelVjOO1EmdpraRqcJ4rNhJRLC2U9wdVYeTjuPxHa1SShGotmRSrU7nduSebI8XF4kfS62EsROqn9VOtm/Igis79zC1Lr+zOqQvky74eYOLj/ANVtUasasdqJSlFxdmZKlORQCgFAKAUAoBQCgFAKAUAoDR4hiQoJJAVQSxJsAALkk+QFZeMruT7OPj3k1OO8/OfP/NzY+foJGHjJ8Jds3YyMPtHt5D3mpaNFU48zQo0+JX4Ie9dNl+KLhyvwMsRJIMoGVokdGPzgZiSFsPZ6d9faA7i9HFYhQVl48uvozuU8rLx5FucrsqrkW2i2Adm0VF8hc5RfQDb2tM6N9d79Fxfu+fceQjvZROc+Ns8jYdGBAsJmX67L9QH+7Xa3c3NamEoKMdtru+/e/Yjcu0eWhl4DzB4MKxeAGy5rOHyt1Nc3zIw9PgKnlTg3dq57+k2ntJ2vyXv4EuOaXbbxx6A4dv8AVB7657Ol/qvJfYkWDlvs/wD7fSRs43jsiFbvKbxxv0jDgdSKx3hOt/L4WqKmoST2ktXuX2PI4W6ytw1l/wDo0Z+b/OF3/ekjA/yQipuzp/6/T2OJYOW9+l/dlQTi0keJbEKAM7OWjF8pV2uya9tdPLQ13KlGcNh+HIjcOzts7jpuDxayKssb5rrmjJ1LINGVv20JIPmNNb1iShsNwkstHyfHue4sRaqRv119TW4zwqOeIW8OLVmEjAnZf90WGltsvkqjSvaNeVGbTu+X1+/N6nMZuLzu+tTnWOwLqxV0ZG06WUg6gEXB9DetqM01dO6O6lnofOCcVlwkyTRGzLcEHZ17ow8j+Gh7V3OEakdmRn1YH6A5Z5jjmjTERk+G/tL3UjcH9pT9/wAazaVSWFq2lpv+5UnT2lbeXBWBFxsa3U7q6KJ9r0CgFAKAUAoBQCgFAKAUBjmewqDEVezhffuOoq7OP/LNzIVVcDE3VIA85B2S/Sn8RFz6AdmqhhaV3tsuU43dznnLHBBiJCGJWNVOZ7Xs2yqL6XJ/AGpMTXVKPM0IaZG9y/wVmxLrIt1gI8VcxRpBc5Qg3u1r6W076ioa+JUaalF66cPHuJlLLL+i/Fsq5VayopBcsSFTsqkm5AVQv7VrtpYNlqKT2pK7ei58X4u/LRHsIbTz669DT4s7RQyyhSgiid1zG7+JJ9GjsNge2U6+6wruktqoovNtpPhbVoVai2bLru48bnLcDHc1uyZ1QiWPhvDy5GlVatRRRoq0UWbD8JVMmZGOc5bLe+xJN8pAt61nSxW1ez0IKtZpfLr13EnzFgIyYhklFwqAtYgZVso6U723JtrUdOrKN7W487ehXw1aWd7avTv72VLivCSnar9DEqaNBNSRWMfDV6LKdemWb5PcWfDnTbwikytr03OSS9vqlbfibGqPxCCvF8cvqijSlsyaLgIijEKApA6or5gVGt4yPaQX29oaWynQ0cmv3M1uf34dalpqNRXWvH78H6ceKiuaeFriYjJGuaUDMJGlOixrdo9ek6HMp3N+1rVLh6roT2JPLu46P7/khTccn5W9fuUpOXZHwb4rrzBlypkPVHY5nHnbpItpYN6VpfqYqqqfrz4HFTgbvyc8wfN8R4Tn6GcgHyV9kb4+yfePKvcXR24XWqKclZnfOW8bcGI7rqv7vcfA/nT4dX2o9m92ncVMRCz2kTlaRWFAKAUAoBQCgFAKAUAoCO4tjFjR5HNkjVmY+QUXJ+4VlYubnU2Fu9yamsj848KlbH8RzyoH8V2d0LFRa1lS6i9gMq1JXfZUflehoUoreW/g0kSr1rGvTZAcoUALaZVvYBswkDa3N1uCNKzXtv8AjdvO/H/r4WtbcaEf4rZvbfa973yv6W8d5t4CSyGw6S/0Xa11UMV0BCknTTQMD2FQ1Ipzz3L5ub617rHsottX13/n69zPM+MiTLmdEBP0ZlYIHYbynNYW0XL5AaD2CPYRlK7s2+Wdlw+/9nlaoorZv1w+/FvvNFZ4pcLiIziHkALqZo0zLZh4psNLovUbbbgfaqZRlCpGWzbSyfl4X64HEfmpu3rqVeXhSwS5FlWVSFZJFFswI8rmxB0tc7VehW7SN2rbrFjDp2zLxyfwsyEaAdzfYAD8qysS51J9nT19FzZJiq0aUbsnuNRRjEQxWDBAGII0JYOBp5WX8b1zLB/poWi7uWr8vTxM7DVZVNuWhr8wKgVG8NUKyKwKqBfuAbDe9tPdbTb1tOdo6NWZNS2tmXzN5Pz6/JtczcIDR+Imq2BPmtxcX9PWuXhZ4WV4u8fVd/LgzzA4vaexLX3OTcWw1r6H4VsUpXRo1c0WblfAQYfxMrvM5RBL4YXIj2ZympOYgK26/gTVOvVlUS2lZZ247szOpwltPrpnrhXGYWRP/lq7O5ZA5Aljkc7WIGZdbaeouQwy+VaU81KFkteDS39f3xTqrayfn7d3sTMJGcBgBmIuu4WRTfvbS5zC+4d9rWqnK7hlm16rrLwRZqJSW0uuvpzM6YoF4UCxksyLIuRepy95HJIvYJ1LlII0uLCo+zezKV+Ns9271ye7gV3lfPr27znXOnDkCRyoiqHkmUspN3s7BSRsD0NtvW3gqkn8re5ENaK3I6HyTzAZIYMQT1L0S+pXRvvUhv4hVaX/AKfEXWn0ZWlHai0dXBrfM0+0AoBQCgFAKAUAoBQHwmvG7K4ObfLNxQxcPZAbNO6x/wAOrv8AAhcv8VZGHW3V2n3lumszjPLUBfExIJWizMAXRipAHVoR30H59qs4mSjTcmr2NCnG+Ra//wCpFDLJh8Ph5kIlKzu8hOXqyCUtqcxFzlbS9rA1n9lKpBVJyTy+VJeNrfYkgrvZirtk0eLwmQASKuVXKs5JUHbfUk9Tkeh9KrrDzULNavO3XJFtQdJfMis898MKiN81yBGGUbIZYla488xVz7gtX8DUTbVuk/z7lCvd5+Bo4TjKRYLwIswkkMni75QG6b72JKdPa3V51JOjKVbblorW67yehbYtbxMPDkuRXc3kX4SUIuTySLfFiDkDR5JkQZiIyySxkA3YFbSLtuLrbXasy2xPNuEnv1i/ePsymp4D4jHZbtJabn4enA1uK8axOGdDfxJJo84kxF28NABZW8P2zYg5tDrrvVqMI4i/af45Zb346Gc28NHZh81+PLjbrvPPG+dJgAcqOmW7rkkRh1llGa1lyo0dxvdgO9j3/wCPpN5N38GcxxU6TyV1zvfNK/hwy0sTDjEKVifNMyKrqXNokRichyA5LjL7TknvVWrW243lLZi8rLVvv18i3hsDh03VrTvbTcul0yr8dy36XR7aFkuRe19CQL77jSrOHvbNNd+po0sVRxCk6TvYj+X+M/NpTmJ8J8oktfS17NYbgBmBXuGIrvEUe1jlqtCGT2ZXtcj+H4JJsaI4yViaVipHSViDFsw8iqC/vFTTqSp0NqWbtn3/ANmds3lZHQRikijBaRCGWCQINGPjXZzbYe2+h7C/asjYcpZJ3V15aeyNKLv8rXFfb2MXEOYhG4cB2RkbxChBMZtk8XUbkPa97DKBbz6p4SUo7OSzyT38vD1IqlN085LLr7Fa5uwsaxYZ4mmVJVLCGWRnyAE5SLnuCT8av4Wbcpxla6eqWpVksrmz8muNs80JOjKJFHqpyt94Zfurn4hC8VLwIlqd95ZxPiYaMncDKf4Tb8gDV7CT26MX4eRn147M2SlWSIUAoBQCgFAKAUAoDxMek1DiHalI6jqcQ+XjFXlwsV/ZSVyP3mVQf8jfjVLCLJsu0Vmc64RjBFKrsuZR7QsDod9GBB+IqWrBzi0i/FHUYOLRzaKFnR06os0YfKLdVkOW42sbHW2u1Ys6E45/xaeTs7d3jyO1lvtz6zPWKghVcsMDovhlpDdTMFdRoYyAygE2J0sfSpcM1KpfEO63W0uufM9jtTfzS+n3PfHuGrLDEJczK5AURquZyLBBdXzNZbjU7E771doywsJXimtc/fK+R5s05txbt13HOOLcAmhdiEJiB9tGEgWxtaRk0VvMG3xqWOIp1HZZPg9RTWy7Fy+T/g5NpioNilg6kqSz5EX4sCzHXpQC3XeuYrbq8o+r/C9TrHVlCjs73l9/svHgTPyk8p4aPDy4iHNFLdEXJfK7uxX2fq3JvdbDepU3tPa/iusz53sItpxyZVOPosseEljhaR1jJMSuykaKpVTY9WZTYWNwBoSRapQjOjKam7JvXJ8dfC3iaNWar0YTSvl3EI2HMlgcDNEuZWdpGkAsCLqFKLmcAAaXva5Herc6mz/7ibtokuHG+SK1KClLKNvH8asug4dFjOJCBpHWMQr7O8ji7BbnQWQgXtfRvK9VsJSlCm9pZ5td1vue46SrVtm+St63LLzHyzh1hWKKIJ0ytdQSWyBc+YnUtazDW91I2JqacJShdfyXVvHQmwFRUKmytH0uuBxbisBjdkbdSQf5j0O499dU5qcVJbzYqm9yLHIcdD4YBsTmJAIClSrXDEA6G1r63rjGbPYtS6ZQTW1mWyfirRzGTExRmNmWE4eMpcCEfR5VFzY5jbL5W9+fGjtU9mm89bvTPXgWWo7OT6+r5EtiJ8NDmEEfhpnaNp3YZWKHWNTcDfzIGlr9qgSq1GnN33pLXvZ5eUl8zu+H97yh878ZSeUCPULu9k6ja2nhixA89fStTCUnTjd7939nDRp8nT5MbD+1mU/xIf1tU2KV6Miu8mfoLkGa8cqeTg/8yj/xrj4bL5GuZTxa+ZMtNaRVFAKAUAoBQCgFAKAxYj2arYz/AIn4HUNTgHy2EniKD/68dvjJLVfC/wDH4l+gyirGBqf6/r9amL6LJylnkjxUERYSMgaPKNTbRtbXAynLe9uo1TxTUJQnLS9mFFO9zU+dSsscZnk6TaIMxHhtmsy3HUF127a6aVM4xu3bv5/Qn7KnGO1fu7+HiTXE+ArFCHTHpIQDZFkfpW9mEI+roLHa9u1VaeJc57MqdvD3uRrJu8bL2XLP7EO80jZC0rFIVPhrfpRLZVjUD7Wg87E9gastJXVs3034EtSjTjZrfpyW77l3wnM4w5TDw4dpZI5SxAvZlhjEa6rdtMob2fP1Nc4eShRU5O183fLUxviVV9tsJN2S9c37kg/MeIxMsEMmEaACTNmYyMOmB+khkUHzsTpv61DWq01Rkoyvpo1fVEGGc5VbSjbX2MXB4I4oZInkBaIv4YkyWco+wF79Q3U+flUOLk6rp1Fkmnfxtw4fQs0ac6dB04q+y92uSy+3iScE+HLEu8agRlwSw3YLlUbaC7WG+mtzVGunVhaCcd2mrWunuWnF9pFU1e3DyTffmVd8a0UgxCo7vFiksmYZntAq5SUvpaVtADtqN63ZTUKqu8tnr2RnSV1VklfNderJTHc/SDw3nwEsaJIjFszn2h4drOirY5vP8aUqlN/LGSb71uKnazTu4tI55zUFaRGUWUx6DvZJHRb6nUIqDc+80w6s5Lm/Wz97n0NWttwjP/ZJ+az9blg+S2IB3lNgNFVmOUBrG+txfcaX7VW+INtxis+JFTklCTbLJPiMmLzI3Q9wcvUpIA1vte5ta4rN2G6eazX164MsrOKs75dfQj+fsWFgex3GQXjUXzaW79rn4CpsFBuquGuv9Hlmo5nLa3DmxucFYjEwH/ix/i4Fc1VenLuZUnqfoT5Pm65x6R/m9Vfhjzl4fUrYvReJc61ikKAUAoBQCgFAKAUBixHs1Wxa/afgdQ1OA/LapHEEPnh47fCWW/6VXwv/ABvvL1EoOa9TGjHQtfyY2+fC4uMhuNPtx+ZFUPiP/Eu9fUO9nbgbOBQ/PpiiXyMqAW0OexO1xmChxcHY+ep4m7YaO07ZX8vzZndLOs88ln49XL/x2Aph8wgjU2FwM10O9iMthvci+t71l04NTjeTz64nmHqbU7XfjbM43ibpL4ViFSTTNe56gAxv5i1vT3kn6NZw23q10vuVoSd7NnSsXw1fBimhypO02KRpc4S48SQWJJ00/Dt3qpJwWGi5q6st1/QmcqNPHudW1rLdf/FWNXh8k4nw7STl0zhrJOsh1RjoAxOua17bE+dU5dioy7OFn/8AFx38bFytXwlWGzRcb93f7dct/lrGZsRO2WymZwDc5Vuq73FvauL/AANSVo2wtO+bhaTXLP8Asy6V5SqW0vZc3G1yWngjSNwqILlcwQjbQgsQTay7na50FcyXaVacY8dq/wD1tl62J6dk7pW++n9cil4Q5sOWRgkoxb/WylfqA3JUAW0zEa2qxiGpVfmV4uPflroQfDXThKTq5Wk78OC+hJQYWWZ448RJ4kTSRB0+cK97OCBZWJ0Nqjw36dVVsRs8/wDFrdxsXcbWwc6EowtfLdzVyv8AMXDEbFlAtoY/GACnSwnlCqDf0Pft2rVwlPbqT4J/RHtKgpKEXooxMPE8BL4EM0UTWSSRUCrZmSTIyTIoFygMbageu1eTlCOIkm9bW3ZrK3qv7M3HWcrw0Tty3fbmfeB4OZMO8xiZS0seYZTmRIYnzSMtrqmaRdbaBRqK5i6U8QoNpqzXHN2+zOvh72Xd5J5cjJztxAzQxk3uGQasxvZHsbNtcEaVGsCsNXbj/FrLlpl9V+DQrQUEraMpwFtbVMRXN3gq5sTAB/ex/gwP6GvKrtSk+TKtTU/QXyfr1Tn/AAx/rqr8MWcn3fUq4vd4lyrWKQoBQCgFAKAUAoBQHiUaGoq8b05I9jqcU+XnBnNhJraWljJ9ellH+v7qoYN5NF2k8zlV6tM0YPItfyZMBjgW0AQ393iR1Q+Ixk6KUdbr6jNuy5+xOcLmjTE/SMwjmmBB1GUlSuh2FwF89VHurvGYKdPDxa1ivm9H6Zlicezbtq/K+4ufF2ijhlaV5gsQKp4hNmuz6/taZdvQeQrJjtSlGKzb08yCLcWpJLi7arJZcrvccyn4e2IxZlcfRtksNektIkEKfih07Bvju1abw1GMd9vzI4rUnCSlx9y4rHDi1hwEkxRvnOK0G+VXnOmbQ6qfv28+MM701yS9vyUvidqlTvS9rGlzJyrFgEjxCSyFmZ48swW4DxOxK2sbhdt7Fe9LurTd1bTLTh15oqUoxw89tPRP0X3RLYLCumFgVkswXMSqkODIC79TAJuTqWt8NsuEnLESazTutLZLTv8AW2ZrYWChSV3nlfPfvy19DN836lDLIw3IlW41JsbDW4BXa9rm5vt1/wAdOTiraFpyvbP264lf5j4SHxscbfRjEzYU51FhomJQ2DW8lv2JN9atfD57UVHhfdb/AFt9TFxNJKU7b7eed/oTE3KOGwDxYs4iRVWdFtMEAsxsCCAPxvVynJzTyt4FTsY05KVyB5gMUrPaZc0zuEADln8SdgpF9ADmNsx091cUsXKl2iUG829rKyy77vTgfRSxdGnCFO+coxt4rL6lphxcXinD6EL4ZVbgsBYklddhl021UgW2rBXabUa3nw1/L9Dxxiotb+rXMr4yMSx4e4USF1K3sxvGSmgPmSSPW1eKNSUpVIru4Zv+jlxShfy4czm3F8PGMMy+NGXiaxTqDArIUIAKgaC5Ou3ur6b9Z2ijBwlmk9rK2nff0PKmLpSXZX+Ze+8qzvSx4nkS/JMGfGx+SB3PwUgfiwqHFy2aL55Fdu8j9B8hw2ikb7T6e5VH6k158Njam3xZUxT+ZIs1aJVFAKAUAoBQCgFAKAUBz35XeE+Nw6UgXaAiYe5Lh/8Ats5+FY9H9utsvuLUHmmfn5BetBovwlkWTk3Bzl5HhRHKplYSZbEPcmwYjMeg6e6qmLqU4KO22s7pq+TXNaakVWVZfNR1LPw7EzHEZJcJArELdJAcrksXVhfOFtkYXHoKqV6+1S2o1ZSXhlomtze7Ukw0q1e6rK2znzz/AKLTxxGWIXw0C2As0j+IFPYqMp2JB7Hp9BVGM2pLdfgrN+vWRYjBVLrab11yV+ZTMG2MU4d2wsKxM0CsQFvYzqY30kJ8RTqDqN7ixtWjOpSqOUe0lKSvrfhmv42syjCripy/djl1zJbgPDZZeIYfF3RYkxOIjVACD7EzO5ObV2La/CwtpVvDRUKd3vX03HGOptVddy9SY+Vq5wkPYeM2YHcZ4H9nXWwYjY/CuqctqLa60ZTrZKz32XqY+OYg5MsoCKtrPGuYqbi7Hw9UI3tpqKwcOkpJw18FfrxPpIRilld8n1mYMRiLSxnxHc5M0aZDJoNEkbKMoZr63F1BtfQmppvai43dr7+Ns1Zvdn38DynFWd1bc7PdfrvtkYeLSSNjuH5gobxIzcFSLrJHe7BgSbFhbN3+BsfDVHak48vZmTj9mM4qN81LXLfEs3yg8LbFYaOJGCE4iIkuDsQ4FrMO9ux76C1xo0pqSZTqRclY59iIIo8ishM0NishkKqpjkbISh36lvr7qho4WpWlO00o3aatdvLPO+XA3P0FOpsTk84xivQ9cvySYjFy4iZFURKkeUC9k6idAQGPV6aaa7GnjKKw9JUYt5u/t11cJS7Sbaz0XuWbjmESR1ZbqcP1K1gl2sGGWzE23v78oGtUIVNi6i7qX9deZ7Ti5L51v63eHcVDnGDDCTFsEfO2SRWVukGRFOq2tuxOnnWxgadedGM9pbKumms8nuf4K8sFTf7u9fhFDJq8ct5F3+TLA6TTkeUan3dT/wD4+6s/4hP+MPHr1OI6nfOAYXw8PGp3tc+9uo/nWjhqexSjEz6stqbZIVORigFAKAUAoBQCgFAKA0sfCCCCLqwIYHYgixB94rLxsNmamt/uS03uPy7zLwpsFipcMb2RvoyfrRtqh9ek2PqCO1WoTU4qRdhIleVMJJJE5RGYZzmIGwyrpfz2071PHF0cPH9yajfi8/LVmphKkY03nbPrqxN8JgKzMHjVh4tsqNncBUB0yG4ClxYA36m0rI+I14VntU3u35LV8eNuFtDtTU3OUXwV/PIs/MzxmMZY52ItbOJ7LqNT4vTWfGLU47lbl5Lf5ZEeGvtZ28LZ+RWOH4J/ERsqlROL+EwdV+n20N11B3A0ttc19CsZSlhnT2s9jR5N/Luvr4XJIV4Ok4prJNPPTI28NzcmEOQIXdMRPIBooyuhTVrk3ub6AaaX1NQULumu4x/i1ZRrW/6x9jzxDmV+LmPB5FhDGRsytn9iCSwykCx1GoIPnpoFWp2EHO19ORmQTxL7O9tHfXei1Y0GTCqTcho1tfxNMyjs/St72sCSb2uBevnV8s1yfP308st/I+lo5St9vpn56c2RfBeF+FKoz+KTDE3dsuYtp0nMLFe2ovfa9S1qjlHRLN6Z364fgnnXU43ts2y4e+XnkzX5xkeOcYy9xhPmpKnPdjLMwPVJrawGtu+nnV34bUUZbNs5P2V9+ZhY2g241U1aKeWXLhl7npvlNSQoJICiiSNsyPnsFNx02HcjUEaabHXVjGxnxxCeqKxJxBY54syF/Ew62RDa7iRzbY6WL6WvtUFGpUjCbg0vmzbzsrLmj6HGYmWHltQV/lj+CwcsMzpMDC0WaSIBLSagohzEudbi5uf/AFl42W1OLc9t21y4vh19ecJWnVi51FZ5+yJrjMpVZHF+qJtmCm6g7E6ag7fd61aaTklzLC/j3HPucp0CZQjHNHhrObi2RcpVlIte0YIsb2IvW3gp1HFxurXd15O6d/PIpyxMl+1s2Tz9SmqCxCqCSSAANySbAD1Jq9pmyJs71yby8I0gw2+UZpT5m+Z/gWNvurIgv1OIvu+iOZy2IXOmVvGcKAUAoBQCgFAKAUAoBQHiVLi1RVqfaQcT2Lszlvyw8qnEQDExLeaAHMANXi3YepU3YfxedZuGqbE9iXTLUZWOR8uShm8GSYxxMc5srNmZewC/XtsTpp6irdWErqVOG1LRZper3dx1LDvESUE7Ft4cIo5EGHEgIJzMzXLGwGi+wo1BsDtbXy4qfD6tWlLtZJy4JZLlfVvn6GthcFHDwcIvN69fUmuMcYM0Y+mEihwD4cTx2sVIVszFiddQtt/OqmEwPaT2pK1lbXPO+mXv6nmFlCScoPLf4lZkaFMVhTA0iM88SNExzdAlX629rgdL63J2tVqrRqQjKM7SVm09He29bu9buZnVMDGhUUoy1661JTCtGgmxVrSQzOFdo7qxkLIFBLakWYmw6dDrWbUjOpak38skrq/DO+n9mrKlSqV4uS3LPwNzh3GpMRIAzCIRpNJmw6LmGWFjYZs9wb2tbuKkw/w+jTbvd3W98/AfEsLDDYfbhe91w4NmfljHzYjB+GkTyyRAI5Vr5Q+YKcpsAcosSBp5AG9R1Ph0nXcoWtrz7tePLvZn4bH03Ham89+WvDNa8SZLStIJfmcoAjCklHTKsQYq1zYqQfFGlzqNLGo5fDq7hbZXG3e89XyW9ElPFUYwa2nx09Of4Kzh+ItPHjps2iyYR1QqCpXxMi52bUnpLWv39auQwUI0knqk9OLvf3IMLiP1OIVP/G/LTpGrjuMjEBYpYcPkZ48xUCIn6QW683Tf+t7VXp4R0LzhOV0na+a04WzNjFfDKEaLbvu4b35+xBc3iTCYqAqy5o41tkkDEWdjr3GjWuRrra9qvYPYq05bSum801k8l4bijiqiVSMktEteRd+T4S6tiSxbxOpb39lRa/Vrc/ytVH4lUp9qqdNJKKtll1YsSqKWcdHbrrgT3E8IksZjcXV1F/4hYAW76G3uFZsJyhJSWqZEs8jj3NGJcN82zllje7XvbMq5FI/gttp1bnevq6fZTjGrCKTaz8c2vMixdWMmordr3lj+S/lnO3zyRehCRDf6z6gtbyXYet/s1Sx1ey7OPiVUdw5fwORC5HU9vgOw/X7qnwFDYhtPV+xVrz2nZbiWq+QCgFAKAUAoBQCgFAKAUAoDVxcX1h8azsbQv+5Hx+5LTluOG868hJBi1nRW+ayt1BAx8GRvZuF6vCLW2Iy3t5AxRxUnSdn8y9V9y1Szmkze+ZJHGl58OVv0KsUhIObN0ddy5PqdzUEcdVcmknd63tb2slx0Nrbd7W82rexJYLgw6czMoILWXdb5ekkpYW6TbQkr6a84n45NK1CGaer0a5JPf6ZcRUxMckkvLh4lK4vhVTFYVlVg4lRibEDJGPEa9wNshIuNq1cTXp1KLcXm175Wy33ZHjIQnKm463t4c9fcvScOzYG5RfEBLozAEIxNxpvlvobbi/nXzbqJSbWl7PmrWfXEjqt9paPh3mryrgMbxKIzMcNAg8ZADAWZiyNFID1jIoJIvcm6nSw128J8Op0W5Rk3dWzd/Ew54ipOOxO1iM5BxvzHF4rBTRjxBkuyyIFsoJuM4F8wkUjS+99qlxWzTjeV33K/ueYWlJyaTLFxPnuM4TESeC5yeNGw8aInMmZSRrcjY3GtjoNrw9rTlOMHe7s9CxKhJQck1vIHkHlHFzYJ51kgiWYxOiSxmTMIHZlLWICBj3GYkAfG7OgpxcW9UU6EpUZbUXmY+FY6TFTmOeKBBBKUZVTqLxGxAubELbzHtA1gYjDRwiai5Ntb3dZ/c1sFVq1VJz0XuevlU4YJl8VbB0W4zWDNlBLKLXuMoJ1I9kVJga+xVcc7O39+eRLKk50slmvYjeSeNDDokUhugYEMuuW7C6kDUixk1FyekWAFS4zD9q3OOpcWCnCmrO/0b9/7JnG83ARgILsVUG91CnworEsR2LS7X1Udjeq9PAva+bT+/wABYepKWSt35b3+Cn8ucpy47FMM30IJaWUC3tG+RBsGOtuwGvkDqVcSqVNJa7l9X1mzOxNB0qjTd1qd54PwpAFRVCxRgBVA0sBoo9Kp4TDutPblp7vrUq1amyrLUsVbpTFAKAUAoBQCgFAKAUAoBQCgFAR+NwgsdLqbgg+v6VkYvC7Pzx09vwWKdTzOf8f4F4AzqsskQJNg6/R/Aoen9q9/PzrOalfL6/c1KNZTyeTIVMfFbTxAP8VNdf8AD8q4canSf3LNuaPpxMJ+q1/8WPz/AMP30/c4+/3PLc0ZxjIyN5bbWOIUi3lYpaudmfLyFuaM2H4giCyGRRckKs6qNSTsEtuTXe3VW9+v3OHTj/18jGcZHct13O7GaO50FrnJc2rhuq9X7/c9UUtLeQOLiOhznf8AtY9f8leWn0me25o9x8RRVCq0oGwCzqBtsAEtau9ut/s/X7nPZx/6+RgGLiBzWkzG5LeKgJJ7khK8faPV+50opaW8j5JiIm9rxG/elRvzjr1Kd7/R/c9tlbIxSYnD20Rv+ePT/tV1+5ufv9wk+K68TNwvCJiWIRHVBe8hMZH7o+jGY/l37X9faR/k/f7nFSahzOg8E4WqoERcqDc2Gp7k+bHzqfD4aVeXLe+ukZlarbN6lhjQKAALAVvwgoRUY6FJtt3Z6ro8FAKAUAoBQCgFAKAUAoBQCgFAKA08Tg+6/d/Ks3EYG/zU/L7E0Km5lU4ry4jaxBI27gpdT8NLH1/CsiUWnne5oUsS1rmiAxGCaIgSZFv5QsQdexUEdxp7qis+D8y4qqloeNPtx/8AQk3I07el68z6aPbvgz1b1j7/ANhJ5j09QPdXPWqF3zAUfaS+g/3Enu06fUfhTPpo9u+DPth9pP8AoSfy20P4061Qu+DPmX9pNf8AgSe7TT0NLPpobT5i43zR+v0Enlfy8vwr2z6aPLvmYnYbZoyToPoH9R5f1aurS4PzG1bNmbD4HMesIR5Klifeb7enqa6S7/MinX/1LjwXgpyi65EGygW093YVo4fAyqfNUyXqzNq1+GbLGiACwFgK2YxUVaKyKjbbuz1XR4KAUAoBQCgFAKAUAoBQCgFAKAUAoBQGOWBW3HxqGrQhVXzI6jJx0I/EcONjazDyP9WrLq/DprOGfuTwrLfkVPjXLqHYyQHzjsB9zqV+4VScHTfzx87l2GIk99yo43lzGgkx4+/kHiUfit/yqSM6G+HqTrEcURUnDeLL/bxn3EfrGKkvhP8AXrzO+3jw68zCMJxXvMn3r+kde3wv+vXme9uuBsR4XH/Wxar+6gb8wvnXLlh1pA57XkSPD8HLmAMssreQVfyRb/jUL2Z5Rj5XZxKq9b2Lhwrled7FlEa/tb/BR+tqsU8BVnrkirUxMeNy28N4JFDqBmb7TfoNh+dalDB06Wer4spTrSmSdWiIUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoD4RfevGr6g05uFQtvGvw0/KoJYWjLWK9iRVZreacnLOHP1WHuc/rUT+H0OHqztYiZj/2Sw3cOf4z+lP/AB9Hg/M9/U1DNDyzhF/sVP7xLf6iakjg6Mf8fr7nDr1HvJODDogsiqo8lAA/Cp4xUVZKxG23qZK6PBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQH/2Q==',
        mapUrl: 'https://maps.google.com/?q=Annavaram+Satyanarayana+Swamy+Temple',
        description: 'Second most sacred pilgrimage site after Tirupati, situated on Ratnagiri hill along river Pampa.'
    },
    {
        id: 'srisailam',
        name: 'Srisailam Sri Mallikarjuna Swamy Devasthanam',
        deity: 'Lord Mallikarjuna Swamy & Goddess Bhramaramba',
        location: 'Srisailam, Nandyal District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yp7B1ic3fKPeOAxfXK7bd2Seg--LAbnrR66RbZ0L4A&s=10',
        mapUrl: 'https://maps.google.com/?q=Srisailam+Mallikarjuna+Swamy+Temple',
        description: 'One of the 12 sacred Jyotirlingas and 18 Maha Shakti Peethas in India situated in Nallamala Hills.'
    },
    {
        id: 'kanakadurga',
        name: 'Vijayawada Sri Kanaka Durga Temple',
        deity: 'Goddess Kanaka Durga Swamy',
        location: 'Indrakeeladri, Vijayawada, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTjuHF8RRol9lRAjClZbX6KfYDjQtPpZH37pYo7Rs-Q&s=10',
        mapUrl: 'https://maps.google.com/?q=Kanaka+Durga+Temple+Vijayawada',
        description: 'Sacred abode atop Indrakeeladri hill overlooking the Krishna river, revered during Navratri festival.'
    },
    {
        id: 'simhachalam',
        name: 'Simhachalam Sri Varaha Narasimha Temple',
        deity: 'Lord Varaha Lakshmi Narasimha Swamy',
        location: 'Simhachalam, Visakhapatnam, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRGGxxFYymF0rQnuFMuI8EAS9pKpgCD8X7B2EWA3Xew&s=10',
        mapUrl: 'https://maps.google.com/?q=Simhachalam+Temple',
        description: 'Ancient 11th-century temple featuring Kalinga architectural brilliance, deity covered in sandalwood paste.'
    },
    {
        id: 'dwarakatirumala',
        name: 'Dwaraka Tirumala Temple',
        deity: 'Lord Sri Venkateswara Swamy (Chinnoji)',
        location: 'Dwaraka Tirumala, Eluru District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_n3Q1xQbfU1y0mXB6tGRVojLxqG7yz7txvGHmcNQSg&s=10',
        mapUrl: 'https://maps.google.com/?q=Dwaraka+Tirumala+Temple',
        description: 'Revered as "Chinna Tirupati", self-manifested deity discovered by Saint Dwaraka in ancient times.'
    },
    {
        id: 'srikalahasti',
        name: 'Srikalahasti Kalahasteeswara Temple',
        deity: 'Lord Kalahasteeswara (Vayu Lingam)',
        location: 'Srikalahasti, Tirupati District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2XkyPDEDD4oruTFtXKSl-oTUS7CpT-dQMBaL2tWhoQ&s=10',
        mapUrl: 'https://maps.google.com/?q=Srikalahasti+Temple',
        description: 'Pancha Bhoota Stalam representing the Element of Air (Vayu), famous for Rahu Ketu Sarpa Dosha Nivarana.'
    },
    {
        id: 'ahobilam',
        name: 'Ahobilam Nav Narasimha Kshetram',
        deity: 'Lord Sri Ahobila Narasimha Swamy',
        location: 'Ahobilam, Nandyal District, AP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5P7ULcrjOf2qOiivc0-O7NplWJ7A65Y-tVpP9gFC4g&s=10',
        mapUrl: 'https://maps.google.com/?q=Ahobilam+Narasimha+Swamy+Temple',
        description: 'The sole sacred site where all 9 forms (Nav Narasimha) are worshipped across Upper and Lower Ahobilam.'
    },
    {
        id: 'yadagirigutta',
        name: 'Yadagirigutta Sri Lakshmi Narasimha Swamy',
        deity: 'Lord Sri Lakshmi Narasimha Swamy',
        location: 'Yadadri Bhuvanagiri District, Telangana',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnxfUryPxV2UAO8WtBeIm3Gn2rsDrSmB4mrRQa3eVRg&s=10',
        mapUrl: 'https://maps.google.com/?q=Yadagirigutta+Temple',
        description: 'Magnificent cave temple of Telangana renovated with magnificent Krishna Shila stone architecture.'
    }
];

// Global State variables
// Flask serves this page on port 5000 (same origin). If you open the page from
// another port (e.g. VS Code Live Server) we talk to Flask on localhost:5000.
const API_BASE = (window.location.port === '5000') ? '/api' : 'http://localhost:5000/api';

let currentUser = null;
let authToken = null;
let allTickets = [];
let activeTempleForBooking = null;

// --- API HELPER ---
async function apiRequest(path, { method = 'GET', body = null, auth = true } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && authToken) headers['Authorization'] = `Bearer ${authToken}`;

    let res;
    try {
        res = await fetch(`${API_BASE}${path}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });
    } catch (err) {
        throw new Error('Cannot reach the server. Make sure the Flask backend is running (python app.py).');
    }

    let data = {};
    try { data = await res.json(); } catch (e) { /* non-JSON response */ }

    if (!res.ok) {
        if (res.status === 401 && auth) {      // expired / invalid session
            clearSession();
            updateAuthUI();
        }
        const err = new Error(data.error || `Request failed (${res.status})`);
        err.status = res.status;
        err.code = data.code;
        throw err;
    }
    return data;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

// --- 2. INITIALIZATION ON LOAD ---
window.onload = async function() {
    loadSavedSession();
    renderTemples(TEMPLES_DATA);
    updateAuthUI();

    const dateInput = document.getElementById('bm-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    if (currentUser) await refreshTickets();
};

function loadSavedSession() {
    try {
        const savedUser = localStorage.getItem('divya_user');
        const savedToken = localStorage.getItem('divya_token');
        if (savedUser && savedToken) {
            currentUser = JSON.parse(savedUser);
            authToken = savedToken;
        }
    } catch (e) { clearSession(); }
}

function clearSession() {
    currentUser = null;
    authToken = null;
    allTickets = [];
    localStorage.removeItem('divya_user');
    localStorage.removeItem('divya_token');
}

// Loads tickets from MySQL via Flask (admin gets every ticket, devotee gets their own)
async function refreshTickets() {
    if (!currentUser) { allTickets = []; return; }
    try {
        const path = currentUser.role === 'admin' ? '/admin/bookings' : '/bookings/my';
        const data = await apiRequest(path);
        allTickets = data.bookings;
    } catch (err) {
        console.error(err);
        allTickets = [];
    }
}

// --- 3. UI TAB NAVIGATION ---
function showTab(tabName) {
    document.getElementById('tab-temples').classList.add('hidden');
    document.getElementById('tab-bookings').classList.add('hidden');
    document.getElementById('tab-admin').classList.add('hidden');

    document.getElementById('tab-btn-temples').className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-amber-200 hover:text-gold-400";
    document.getElementById('tab-btn-bookings').className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-amber-200 hover:text-gold-400";
    document.getElementById('tab-btn-admin').className = "hidden px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-amber-200 hover:text-gold-400";

    if (currentUser && currentUser.role === 'admin') {
        document.getElementById('tab-btn-admin').classList.remove('hidden');
    }

    if (tabName === 'temples') {
        document.getElementById('tab-temples').classList.remove('hidden');
        document.getElementById('tab-btn-temples').className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition bg-gold-500 text-maroon-950 shadow";
    } else if (tabName === 'bookings') {
        if (!currentUser) {
            openAuthModal("Sign in required to view your booked tickets.");
            return;
        }
        document.getElementById('tab-bookings').classList.remove('hidden');
        document.getElementById('tab-btn-bookings').className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition bg-gold-500 text-maroon-950 shadow";
        refreshTickets().then(renderUserBookings);
    } else if (tabName === 'admin') {
        if (!currentUser || currentUser.role !== 'admin') {
            alert("Unauthorized Access. Admin credentials required.");
            return;
        }
        document.getElementById('tab-admin').classList.remove('hidden');
        document.getElementById('tab-btn-admin').className = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition bg-gold-500 text-maroon-950 shadow";
        refreshTickets().then(renderAdminDashboard);
    }
}

// --- 4. RENDER TEMPLES ---
function renderTemples(list) {
    const grid = document.getElementById('temples-grid');
    grid.innerHTML = '';

    list.forEach(temple => {
        const card = document.createElement('div');
        card.className = "glass-panel rounded-2xl overflow-hidden gold-border-glow transition-all duration-300 flex flex-col justify-between";
        
        card.innerHTML = `
            <div>
                <div class="relative h-48 overflow-hidden group">
                    <img src="${temple.image}" alt="${temple.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/800x400/280009/facc15?text=Sacred+Temple'">
                    <div class="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-transparent"></div>
                    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-maroon-950/80 backdrop-blur border border-gold-500/40 text-[10px] font-bold text-gold-300">
                        🪔 Verified Shrine
                    </span>
                </div>

                <div class="p-5 space-y-3">
                    <div>
                        <h3 class="font-serif text-lg font-bold text-gold-300 leading-snug">${temple.name}</h3>
                        <p class="text-xs text-amber-300/80 font-medium mt-0.5"><i class="fas fa-place-of-worship mr-1"></i> ${temple.deity}</p>
                    </div>

                    <p class="text-xs text-amber-100/70 line-clamp-2 leading-relaxed">${temple.description}</p>
                    
                    <div class="text-[11px] text-amber-400/70">
                        <i class="fas fa-map-marker-alt text-red-400 mr-1"></i> ${temple.location}
                    </div>
                </div>
            </div>

            <div class="p-5 pt-0 space-y-2">
                <a href="${temple.mapUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2 rounded-xl bg-maroon-900/80 hover:bg-gold-500/20 border border-gold-500/30 text-amber-200 text-xs font-semibold flex items-center justify-center space-x-2 transition">
                    <i class="fas fa-map-marked-alt text-amber-400"></i>
                    <span>📍 Direct Google Maps Location</span>
                </a>

                <button onclick="initiatiateBooking('${temple.id}')" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-600 via-amber-500 to-gold-400 hover:brightness-110 text-maroon-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition">
                    <i class="fas fa-ticket-alt"></i>
                    <span>Book Darshan Ticket</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterTemples() {
    const query = document.getElementById('temple-search').value.toLowerCase();
    const filtered = TEMPLES_DATA.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.deity.toLowerCase().includes(query) || 
        t.location.toLowerCase().includes(query)
    );
    renderTemples(filtered);
}

// --- 5. AUTHENTICATION & ROLE MANAGEMENT ---
function updateAuthUI() {
    const container = document.getElementById('nav-auth-container');
    const hintBox = document.getElementById('admin-hint-box');

    if (currentUser) {
        if (hintBox) hintBox.classList.add('hidden');

        container.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="text-right hidden sm:block">
                    <span class="block text-xs font-bold text-gold-300">${escapeHtml(currentUser.username)}</span>
                    <span class="block text-[10px] text-amber-400 uppercase font-semibold">${currentUser.role === 'admin' ? '🛡️ Global Admin' : '🙏 Devotee'}</span>
                </div>
                <button onclick="handleLogout()" class="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-red-500/40 bg-red-950/40 hover:bg-red-500/20 text-xs font-semibold text-red-300 transition">
                    <i class="fas fa-sign-out-alt"></i> <span class="hidden sm:inline">Logout</span>
                </button>
            </div>
        `;
    } else {
        if (hintBox) hintBox.classList.remove('hidden');

        container.innerHTML = `
            <button onclick="openAuthModal()" class="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow transition">
                Sign In / Register
            </button>
        `;
    }
}

function openAuthModal(reason = null) {
    if (reason) {
        document.getElementById('auth-modal-title').innerText = reason;
    } else {
        document.getElementById('auth-modal-title').innerText = "Sign In to Continue";
    }
    document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
}

async function handleAuthSubmit(e) {
    e.preventDefault();
    const u = document.getElementById('auth-username').value.trim();
    const p = document.getElementById('auth-password').value;
    if (!u || !p) return;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
        let data;
        try {
            // existing account -> sign in
            data = await apiRequest('/auth/login', { method: 'POST', body: { username: u, password: p }, auth: false });
        } catch (err) {
            // new username -> register it
            if (err.code === 'USER_NOT_FOUND') {
                data = await apiRequest('/auth/register', { method: 'POST', body: { username: u, password: p }, auth: false });
            } else {
                throw err;
            }
        }

        authToken = data.token;
        currentUser = data.user;
        localStorage.setItem('divya_user', JSON.stringify(currentUser));
        localStorage.setItem('divya_token', authToken);

        document.getElementById('auth-form').reset();
        updateAuthUI();
        closeAuthModal();
        await refreshTickets();

        if (activeTempleForBooking) {
            openBookingModal(activeTempleForBooking);
        } else if (currentUser.role === 'admin') {
            showTab('admin');
        } else {
            showTab('temples');
        }
    } catch (err) {
        alert(err.message);
    } finally {
        submitBtn.disabled = false;
    }
}

function handleLogout() {
    clearSession();
    updateAuthUI();
    showTab('temples');
}

// --- 6. TICKET BOOKING & DYNAMIC PRICE CALCULATION ---
function initiatiateBooking(templeId) {
    const temple = TEMPLES_DATA.find(t => t.id === templeId);
    if (!temple) return;

    if (!currentUser) {
        activeTempleForBooking = temple;
        openAuthModal("Please sign in before reserving Darshan tickets.");
        return;
    }

    openBookingModal(temple);
}

function openBookingModal(temple) {
    activeTempleForBooking = temple;
    document.getElementById('bm-temple-img').src = temple.image;
    document.getElementById('bm-temple-name').innerText = temple.name;
    document.getElementById('bm-temple-deity').innerText = temple.deity;
    document.getElementById('bm-devotee-name').value = currentUser.username;

    calculatePriceSummary();
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.add('hidden');
    activeTempleForBooking = null;
}

function calculatePriceSummary() {
    const menQty = parseInt(document.getElementById('bm-count-men').value) || 0;
    const womenQty = parseInt(document.getElementById('bm-count-women').value) || 0;
    const handicappedQty = parseInt(document.getElementById('bm-count-handicapped').value) || 0;

    const menCost = menQty * 300;
    const womenCost = womenQty * 250;
    const handicappedCost = handicappedQty * 150;
    const total = menCost + womenCost + handicappedCost;

    document.getElementById('summary-men-qty').innerText = menQty;
    document.getElementById('summary-men-cost').innerText = `₹${menCost}`;

    document.getElementById('summary-women-qty').innerText = womenQty;
    document.getElementById('summary-women-cost').innerText = `₹${womenCost}`;

    document.getElementById('summary-handicapped-qty').innerText = handicappedQty;
    document.getElementById('summary-handicapped-cost').innerText = `₹${handicappedCost}`;

    document.getElementById('summary-total-amount').innerText = `₹${total}`;
}

async function handleBookingSubmit(e) {
    e.preventDefault();
    if (!activeTempleForBooking || !currentUser) return;

    const menQty = parseInt(document.getElementById('bm-count-men').value) || 0;
    const womenQty = parseInt(document.getElementById('bm-count-women').value) || 0;
    const handicappedQty = parseInt(document.getElementById('bm-count-handicapped').value) || 0;

    if (menQty + womenQty + handicappedQty === 0) {
        alert("Please select at least 1 devotee in any queue category.");
        return;
    }

    const payment = document.querySelector('input[name="payment"]:checked');
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
        // The server recalculates the price and generates the ticket ID
        const data = await apiRequest('/bookings', {
            method: 'POST',
            body: {
                templeId: activeTempleForBooking.id,
                devoteeName: document.getElementById('bm-devotee-name').value.trim(),
                phone: document.getElementById('bm-devotee-phone').value.trim(),
                date: document.getElementById('bm-date').value,
                slot: document.getElementById('bm-slot').value,
                menQty, womenQty, handicappedQty,
                wheelchair: document.getElementById('bm-wheelchair').checked,
                paymentMethod: payment ? payment.value : 'UPI QR'
            }
        });

        allTickets.unshift(data.booking);
        closeBookingModal();
        displayIssuedTicket(data.booking);
    } catch (err) {
        alert(err.message);
    } finally {
        submitBtn.disabled = false;
    }
}

// --- 7. TICKET ISSUANCE & USER BOOKINGS VIEW ---
function displayIssuedTicket(ticket) {
    document.getElementById('tm-temple-name').innerText = ticket.templeName;
    document.getElementById('tm-temple-deity').innerText = ticket.deity || 'Main Shrine';
    document.getElementById('tm-id').innerText = `#${ticket.id}`;
    document.getElementById('tm-devotee-name').innerText = ticket.devoteeName;
    document.getElementById('tm-slot').innerText = `${ticket.date} | ${ticket.slot}`;
    document.getElementById('tm-booked-by').innerText = ticket.username;
    document.getElementById('tm-amount').innerText = `₹${ticket.totalAmount}`;

    let breakdownHtml = '';
    if (ticket.menQty > 0) breakdownHtml += `<div>• Gents Queue (₹300): ${ticket.menQty} Devotee(s)</div>`;
    if (ticket.womenQty > 0) breakdownHtml += `<div>• Ladies Queue (₹250): ${ticket.womenQty} Devotee(s)</div>`;
    if (ticket.handicappedQty > 0) breakdownHtml += `<div>• Divyangjan Queue (₹150): ${ticket.handicappedQty} Devotee(s)</div>`;
    if (ticket.wheelchair) breakdownHtml += `<div class="text-emerald-400 font-bold">• Wheelchair Assistance Requested</div>`;

    document.getElementById('tm-breakdown').innerHTML = breakdownHtml;
    document.getElementById('ticket-modal').classList.remove('hidden');
}

function displayIssuedTicketById(ticketId) {
    const ticket = allTickets.find(t => t.id === ticketId);
    if (ticket) displayIssuedTicket(ticket);
}

function closeTicketModal() {
    document.getElementById('ticket-modal').classList.add('hidden');
}

function renderUserBookings() {
    const container = document.getElementById('user-tickets-container');
    document.getElementById('user-booking-identity').innerText = currentUser ? `${currentUser.username} (${currentUser.role})` : 'Guest';

    const userTickets = currentUser.role === 'admin' 
        ? allTickets 
        : allTickets.filter(t => t.username.toLowerCase() === currentUser.username.toLowerCase());

    if (userTickets.length === 0) {
        container.innerHTML = `
            <div class="glass-panel p-12 text-center rounded-2xl">
                <i class="fas fa-ticket-alt text-4xl text-gold-500/40 mb-3"></i>
                <h4 class="text-lg font-bold text-gold-300">No Tickets Booked Yet</h4>
                <p class="text-xs text-amber-200/60 mt-1">Select any sacred temple from the home tab to reserve your Darshan slot.</p>
                <button onclick="showTab('temples')" class="mt-4 px-4 py-2 bg-gold-500 text-maroon-950 font-bold rounded-xl text-xs">Browse Temples</button>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    userTickets.forEach(t => {
        const card = document.createElement('div');
        card.className = "glass-panel p-5 rounded-2xl border border-gold-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4";
        
        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center space-x-2">
                    <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">#${t.id}</span>
                    <span class="text-xs text-amber-300/80 font-medium">${t.date} (${t.slot})</span>
                </div>
                <h4 class="font-serif text-lg font-bold text-gold-300">${t.templeName}</h4>
                <div class="text-xs text-amber-100/80">Devotee: <strong>${escapeHtml(t.devoteeName)}</strong> | Total Paid: <strong class="text-gold-400">₹${t.totalAmount}</strong></div>
            </div>
            <button onclick="displayIssuedTicketById('${escapeHtml(t.id)}')" class="px-4 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/40 text-gold-300 text-xs font-semibold flex items-center space-x-2">
                <i class="fas fa-qrcode"></i>
                <span>View E-Pass QR</span>
            </button>
        `;
        container.appendChild(card);
    });
}

// --- 8. ADMIN DASHBOARD & GLOBAL REVENUE ---
function renderAdminDashboard() {
    if (!currentUser || currentUser.role !== 'admin') return;

    let totalRev = 0;
    let menCount = 0;
    let womenCount = 0;
    let handicappedCount = 0;

    allTickets.forEach(t => {
        totalRev += t.totalAmount;
        menCount += t.menQty || 0;
        womenCount += t.womenQty || 0;
        handicappedCount += t.handicappedQty || 0;
    });

    document.getElementById('admin-stat-revenue').innerText = `₹${totalRev.toLocaleString()}`;
    document.getElementById('admin-stat-men').innerText = menCount;
    document.getElementById('admin-rev-men').innerText = `Revenue: ₹${(menCount * 300).toLocaleString()}`;

    document.getElementById('admin-stat-women').innerText = womenCount;
    document.getElementById('admin-rev-women').innerText = `Revenue: ₹${(womenCount * 250).toLocaleString()}`;

    document.getElementById('admin-stat-handicapped').innerText = handicappedCount;
    document.getElementById('admin-rev-handicapped').innerText = `Revenue: ₹${(handicappedCount * 150).toLocaleString()}`;

    document.getElementById('admin-total-passes-count').innerText = allTickets.length;

    renderAdminTickets();
}

function renderAdminTickets() {
    const query = (document.getElementById('admin-ticket-search')?.value || '').toLowerCase();
    const tbody = document.getElementById('admin-tickets-table-body');
    tbody.innerHTML = '';

    const filtered = allTickets.filter(t => 
        t.id.toLowerCase().includes(query) || 
        t.devoteeName.toLowerCase().includes(query) || 
        t.username.toLowerCase().includes(query) || 
        t.templeName.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center p-6 text-amber-200/50">No matching tickets found in database.</td></tr>`;
        return;
    }

    filtered.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-gold-500/5 transition";
        tr.innerHTML = `
            <td class="p-3.5 font-mono text-gold-300 font-bold">#${t.id}</td>
            <td class="p-3.5">
                <div class="font-semibold text-amber-100">${escapeHtml(t.devoteeName)}</div>
                <div class="text-[10px] text-amber-400/70">User: ${escapeHtml(t.username)}</div>
            </td>
            <td class="p-3.5 text-amber-200">${t.templeName}</td>
            <td class="p-3.5 text-[11px] text-amber-300">
                Men: ${t.menQty} | Wom: ${t.womenQty} | Div: ${t.handicappedQty}
            </td>
            <td class="p-3.5 text-[11px] text-amber-200">
                <div>${t.date}</div>
                <div class="text-[10px] text-amber-400/70">${t.slot}</div>
            </td>
            <td class="p-3.5 font-bold text-gold-400">₹${t.totalAmount}</td>
            <td class="p-3.5 text-center">
                <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">Confirmed</span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function csvCell(value) {
    let text = String(value ?? '');
    if (/^[=+\-@\t\r]/.test(text)) text = "'" + text;   // stop Excel treating text as a formula
    return `"${text.replace(/"/g, '""')}"`;
}

function exportAdminReport() {
    const rows = [["Ticket ID", "Username", "Devotee Name", "Phone", "Temple", "Date", "Slot", "Men Qty", "Women Qty", "Handicapped Qty", "Payment", "Total Amount"]];
    allTickets.forEach(t => rows.push([t.id, t.username, t.devoteeName, t.phone, t.templeName, t.date, t.slot, t.menQty, t.womenQty, t.handicappedQty, t.paymentMethod, t.totalAmount]));
    const csv = rows.map(r => r.map(csvCell).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `Divine_Darshan_Admin_Report_${new Date().toISOString().split('T')[0]}.csv`);
    a.click();
}

// --- 9. AUDIO CHANT SYNTHESIZER ---
let audioCtx = null;
let isChanting = false;

function toggleChantAudio() {
    const btnText = document.getElementById('audio-text');
    const btnIcon = document.getElementById('audio-icon');

    if (!isChanting) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            playVedicDrone();
            isChanting = true;
            btnText.innerText = "Chanting Active";
            btnIcon.className = "fas fa-volume-up text-gold-400 animate-pulse";
        } catch(e) {
            console.error(e);
        }
    } else {
        if (audioCtx) audioCtx.close();
        isChanting = false;
        btnText.innerText = "Vedic Chants";
        btnIcon.className = "fas fa-volume-mute text-amber-400";
    }
}

function playVedicDrone() {
    if (!audioCtx) return;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(136.1, audioCtx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(272.2, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
}