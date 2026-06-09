// priority: 500
StartupEvents.registry('item', event => {
    function createMachineOrgan(id, tags) {
        let item = event.create(`better_expansion:${id}`)
            .maxStackSize(1)
            .texture(`better_expansion:item/organs/machine/${id}`)
            .tag('kubejs:machine')

        tags.forEach(tag => item.tag(`kubejs:${tag}`))
    }

    // 生锈的机械肌肉
    createMachineOrgan('rusty_mechanical_muscle', ['muscle'])
    // 机械肌肉
    createMachineOrgan('mechanical_muscle', ['muscle'])

    // 生锈的合金肋骨（左）
    createMachineOrgan('rusty_mechanical_rib_left', ['bone'])
    // 合金肋骨（左）
    createMachineOrgan('mechanical_rib_left', ['bone'])
    // 机械肋骨（左）
    createMachineOrgan('reinforced_mechanical_rib_left', ['bone'])

    // 生锈的合金肋骨（右）
    createMachineOrgan('rusty_mechanical_rib_right', ['bone'])
    // 合金肋骨（右）
    createMachineOrgan('mechanical_rib_right', ['bone'])
    // 机械肋骨（右）
    createMachineOrgan('reinforced_mechanical_rib_right', ['bone'])

    // 机械胃
    createMachineOrgan('mechanical_stomach', ['stomach'])
    // 人造脾
    createMachineOrgan('artificial_spleen', ['spleen'])
    // 机械血泵
    createMachineOrgan('mechanical_blood_pump', ['heart'])
    // 机械脊柱
    createMachineOrgan('mechanical_spine', ['spine'])
    // 肝部过滤器
    createMachineOrgan('liver_filter', ['liver'])
    // 透析器
    createMachineOrgan('dialyzer', ['kidney'])
    // 破损的压缩氧气植入物
    createMachineOrgan('damaged_compressed_oxygen_implant', ['lung'])

    // 生锈的芯片
    createMachineOrgan('rusty_chip', [])
    // 芯片
    createMachineOrgan('chip', [])
    // 中枢芯片
    createMachineOrgan('central_processor', [])
    // 灵魂芯片
    createMachineOrgan('soul_chip', [])
    // 机械发条（改）
    createMachineOrgan('modified_mechanical_clockwork', [])
    // 简陋红石熔炉
    createMachineOrgan('primitive_redstone_furnace', ['heart'])
    // 烈焰熔炉
    createMachineOrgan('flaming_furnace', ['heart'])
    // 夜视仪
    createMachineOrgan('night_vision_device', [])
    // 变速齿轮(一档)
    createMachineOrgan('gearbox_1', [])
    // 变速齿轮(二档)
    createMachineOrgan('gearbox_2', [])
    // 变速齿轮（三档）
    createMachineOrgan('gearbox_3', [])
    // 变速齿轮（改）
    createMachineOrgan('modified_gearbox', [])
    // 资源点库
    createMachineOrgan('energy_storage', [])
    // 喷气推进器（升级改良）
    createMachineOrgan('improved_jet_propeller', [])
    // 魔力转换器
    createMachineOrgan('magic_converter', [])
    // 微型心火核心
    createMachineOrgan('small_burning_heart', [])
    // 后备隐藏能源
    createMachineOrgan('hidden_reserve_energy', [])
    // 多功能机械臂
    createMachineOrgan('multi_functional_robotic_arm', [])
    // 动力臂
    createMachineOrgan('steam_powered_mechanical_arm', ['muscle'])
    // 纳米修复昆虫
    createMachineOrgan('nanorepair_insect', [])
    // 精细机械手
    createMachineOrgan('precision_manipulator', [])
    // 基础增幅装置
    createMachineOrgan('amplification_device', [])
    // 增幅装置——红石
    createMachineOrgan('redstone_amplification_device', [])
    // 增幅装置——切割
    createMachineOrgan('cutting_amplification_device', [])
    // 钢铁外壳
    createMachineOrgan('steel_shell', [])
    // 采集锤
    createMachineOrgan('chain_collection_hammer', [])
    // 净化装置
    createMachineOrgan('cleaning_device', [])
    // 机械盾牌
    createMachineOrgan('mechanical_shield', [])
    // 可充能式不死图腾
    createMachineOrgan('charged_totem_of_undying', [])
    // 工具箱
    createMachineOrgan('toolbox', [])
    // 微型分解工厂
    createMachineOrgan('micro_processing_factory', [])
    // 龙炎动力臂
    createMachineOrgan('fire_steam_powered_mechanical_arm', ['muscle'])
    // 凋零动力臂
    createMachineOrgan('storm_steam_powered_mechanical_arm', ['muscle'])
    // 穿梭器
    createMachineOrgan('dimensional_shuttle', [])
    // 粉碎机
    createMachineOrgan('pulverizer', [])
    // 新生维度
    createMachineOrgan('newborn_dimension', [])
})
