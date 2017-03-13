applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
applet.writeConfig("favorites", ["org.kde.ksysguard.desktop", "systemsettings.desktop", "org.kde.konsole.desktop", "synaptic.desktop"])
applet.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop")
applet.writeConfig("alphaSort", true)
applet.reloadConfig();
